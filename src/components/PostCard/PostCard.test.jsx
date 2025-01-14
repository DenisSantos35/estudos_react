import { render, screen } from "@testing-library/react";
import { Postcard } from ".";
import { PostCardsPropsMock } from "./mock";

const props = PostCardsPropsMock;


describe('<PostCard/>', () => {
    it('should render PostCard correctly', () => {
     render(<Postcard {...props}/>);

     // obter por função
     const img = screen.getByRole('img', {name: 'title 1'});
     //ter atributo
     expect(img).toHaveAttribute('src', 'img/img.png');

     const heading = screen.getByRole('heading', {name: /title 1/i});
     //estar no documento
     expect(heading).toBeInTheDocument();

    //ter o texto
     const body = screen.getByText('body 1');
     expect(body).toBeInTheDocument();

     const img2 = screen.getByAltText(/title 1/i);
     expect(img2).toHaveAttribute('src', 'img/img.png')

    });

    // após terminar os testes podemos tirar uma foto do componente através do comnado abaixo
    it('shoul match snapshot', () => {
        const { container } = render(<Postcard {...props}/>);

        const child = container.firstChild;

        expect(child).toMatchSnapshot();

    })

});