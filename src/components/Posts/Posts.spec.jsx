
import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
    posts: [
       {
        id: 1,
        title: 'title 1',
        body: 'body 1',
        cover: 'img/img1.png'
       },
       {
        id: 2,
        title: 'title 2',
        body: 'body 2',
        cover: 'img/img2.png'
       },
       {
        id: 3,
        title: 'title 3',
        body: 'body 3',
        cover: 'img/img3.png'
       }
    ]
}

describe('<Posts/>', () => {

    it('Should render posts', () => {
        render(<Posts {...props}/>);

        const heading = screen.getAllByRole('heading', { name: /title/i});
        expect(heading).toHaveLength(3)
        const img = screen.getAllByRole('img', {name: /title/i});
        expect(img).toHaveLength(3)
        const body = screen.getAllByAltText(/title/i);
        expect(body).toHaveLength(3);
        const imgIndividual = screen.getByRole('img', { name: /title 3/i});
        expect(imgIndividual).toHaveAttribute('src', 'img/img3.png');

    });

    it('Should not render posts', () => {
        render(<Posts />);
 
        expect(screen.queryAllByRole('heading', { name: /title/i})).toHaveLength(0);
 
     })

    it('Should match snapshot', () => {
        const { container } = render(<Posts {...props}/>);

       expect(container.firstChild).toMatchSnapshot();

    })

});