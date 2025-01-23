import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Home } from '.';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    return res(ctx.json([
      {
        "userId": 1,
        "id": 1,
        "title": "title 1",
        "body": "body 1",
        "url": "img1.png"
      },
      {
        "userId": 2,
        "id": 2,
        "title": "title 2",
        "body": "body 2",
        "url": 'img1.png'
      },
      {
        "userId": 3,
        "id": 3,
        "title": "title 3",
        "body": "body 3",
        "url": 'img1.png'
      },

    ]))

  }),
];

const server = setupServer(...handlers);

describe('<Home/>', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  })

  afterAll(() => {
    server.close();
  })
  it('should render search, posts and load more', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText("Não existem posts =(");

    //await waitForElementToBeRemoved(noMorePosts);


    const search = screen.getByPlaceholderText(/type your search/i);

    expect(search).toBeInTheDocument();

    //  const image = screen.getAllByRole('img', { name: /title/i});

    //  expect(image).toHaveLength();

    const button = screen.getByRole('button', { name: /Load More Post/i });

    expect(search).toBeInTheDocument();

    const text = screen.getByText(/Não existem posts/i);

    expect(text).toBeInTheDocument();



  });

  it('should search for posts', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText("Não existem posts =(");

    expect.assertions(7);

    //await waitForElementToBeRemoved(()=> screen.getByText("Não existem posts =("));
    //screen.debug();

    const search = screen.getByPlaceholderText(/type your search/i);

    // expect(screen.getByRole('heading', { name:'title 1'})).toBeInTheDocument();
    // expect(screen.getByRole('heading', { name:'title 2'})).toBeInTheDocument();
    // expect(screen.getByRole('heading', { name:'title 2'})).toBeInTheDocument();

    userEvent.type(search, 'title 1');

    expect(screen.queryByRole('heading', { name: 'title 1' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 2' })).not.toBeInTheDocument();

    userEvent.clear(search);

    expect(screen.queryByRole('heading', { name: 'title 1' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 2' })).not.toBeInTheDocument();

    userEvent.type(search, 'blabla');

    expect(noMorePosts).toBeInTheDocument();

    screen.debug();
  });

  it('should load more posts', async () => {
    render(<Home />);

    const noMorePosts = screen.getByText("Não existem posts =(");

    //expect.assertions(7);

   // const button = screen.getByRole('button', { name: /load more posts/i});

    //userEvent.click(button);

    //expect(screen.getByRole('heading', { name: 'title3 3'})).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeDisabled();
  });
});


