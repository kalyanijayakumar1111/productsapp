import { Form, Button, Table } from "react-bootstrap";
import { createRef, Component } from 'react';

export default class addproducts extends Component{
  constructor() {
      super();
      this.state = {
          products: []
      }
      this.formData = createRef();
    }

  remove = (event) => {
      event.preventDefault();
  
      this.state.products.pop(Product);
      this.setState({
          products: this.state.products
        });
  }  
  decreQty = (event) => {
    const indexOfArray = event.target.value;
    this.state.products[indexOfArray].qty = this.state.products[indexOfArray].qty - 1;
    this.setState({
        products: this.state.products
    });
  }

  render() {
    return (
        <div>
            <Form onSubmit={this.add} ref={this.formData}>
                <Form.Group controlId="formBasicProductCode">
                    <Form.Label>Product code:</Form.Label>
                    <Form.Control type="number" placeholder="Enter Product code" name="product_code" />
                </Form.Group>
              
                <Form.Group controlId="formBasicQty">
                        <Form.Label>Quantity:</Form.Label>
                        <Form.Control type="number" placeholder="How many: qty" name="qty" />
                    </Form.Group>
             
                    <Button variant="primary" type="submit">
                              Remove
            </Button>

            </Form>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
              
                            <th>Product Code</th>
                            <th>Qty</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((item, index) => {
                                return (
                                    <tr key={index}>
                                    
                                        <td>{item.product_code}</td>
                                        <td>{item.qty}</td>
                                        
                                        <td>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }                 
  }

