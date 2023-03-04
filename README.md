# GU-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Gustavo Barahona

## Ejemplo 

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'gb-product-card';
```

```
 <ProductCard 
    product={ product }
    initialValues= {{
        count:4,
        maxCount: 10,
    }}
    >
    {
        ({ reset, isMaxCountReached, maxCount, count, increaseBy }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />


        </>
        )
    }
</ProductCard>
```          