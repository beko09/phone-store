import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'
import Product from './components/Product'
const ProductContext = React.createContext()
class ProductProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             products:[],
             detailProduct:detailProduct,
             cart:[],
             modelopen:false,
             modelProduct:detailProduct,
             cartSubTotal:0,
             carttasx:0,
             cartTotal:0
        }
    }
    componentDidMount(){
        this.setProduct();
    }
    setProduct = () =>{
        let tempProduct = [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProduct = [...tempProduct,singleItem]
        });
        this.setState(()=>{
            return {products:tempProduct}
        })
    }
    // tester = () =>{
    //     console.log("state product", this.state.products[0].inCart)
    //     console.log("data product", storeProducts[0].inCart)
    //     const temp = [...this.state.products];
    //     temp[0].inCart = true;
    //     this.setState({
    //         products:temp
    //     },
    //     () =>{
    //         console.log("state product", this.state.products[0].inCart)
    //         console.log("data product", storeProducts[0].inCart) 
    //     }
    //     )
    // }
    getItem = (id)=>{
        const product = this.state.products.find(item=>item.id === id);
        return product
    }
    handelDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{detailProduct:product}
        })
    }
    addToCart = (id) =>{
        let tempProduct = [...this.state.products];
        const index = tempProduct.indexOf(this.getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=>{
            return{products:tempProduct,cart:[...this.state.cart,product]}
        },()=>{
            this.addTotal();
            
        })
    }
   
    openModel = (id)=>{
        const product = this.getItem(id);
        this.setState(()=>{
            return{modelProduct:product,modelopen:true}
        })
    }
    closeModel = ()=>{
        this.setState(()=>{
            return{modelopen:false}
        })
    }
    increment = (id) =>{
        let tempCart = [...this.state.cart];
        const selectProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return {
                cart:[...tempCart],
            }
        },()=>{
         this.addTotal();
     })
        
    }
    decrement = (id) =>{
        let tempCart = [...this.state.cart];
        const selectProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(selectProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0){
            return this.removeItem(id);
        }
        else{
            product.total = product.count * product.price;
        this.setState(()=>{
            return {
                cart:[...tempCart],
            }
        },()=>{
         this.addTotal();
     })
        }
        
        
        
    }
    removeItem = (id) =>{
       let tempProduct = [...this.state.products];
       let tempCart = [...this.state.cart];
       tempCart = tempCart.filter(item=>item.id !== id);
       const index = tempProduct.indexOf(this.getItem(id));
       let removedProduct = tempProduct[index];
       removedProduct.inCart = false;
       removedProduct.count = 0;
       removedProduct.total = 0;
       this.setState(()=>{
           return {
               cart:[...tempCart],
               products:[...tempProduct]
           }
       },()=>{
        this.addTotal();
    })
        
    }
    clearCart = () =>{
        this.setState(()=>{
            return {
                cart:[]
            }
        },()=>{
            this.setProduct();
            this.addTotal();
        })
        
    }
    addTotal = ()=>{
        let subTotal = 0;
        this.state.cart.map(item=>(subTotal += item.total));
        const tempTasx = subTotal * 0.1;
        const tax = parseFloat(tempTasx.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {
                cartSubTotal:subTotal,
                carttasx:tax,
                cartTotal:total
            }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handelDetail:this.handelDetail,
                addToCart:this.addToCart,
                openModel:this.openModel,
                closeModel:this.closeModel,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                
              {this.props.children} 
             
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export  {ProductProvider,ProductConsumer}
