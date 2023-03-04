import * as React from 'react';
import renderer from 'react-test-renderer'
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/product';



describe('ProductImage', () => { 
    
    test('should de mostrar el componente correctamente con la imagen personalizada', () => { 

        const wrapper = renderer.create(
            <ProductImage img='https://jenny.jsx' />
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();
       
     })
     
     test('should de mostrar el componente con la imagen del producto', () => { 

        const wrapper = renderer.create(
            <ProductCard product= { product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON() ).toMatchSnapshot();

     })

 })