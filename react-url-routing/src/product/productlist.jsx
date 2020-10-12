import React, { Component } from 'react';
import { Link,BrowserRouter as Router,Route } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

class Productlist extends Component {
    constructor(props, context) {
        super(props, context);
        let imgUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXa2tpVVVXd3d1OTk5SUlJwcHC1tbVLS0uOjo7h4eGcnJxWVlbU1NRaWlphYWGnp6fHx8e8vLxra2umpqa5ubnOzs51dXWvr6+WlpaGhobDw8OAgIBkZGR7e3uQkJBERETECcahAAACeUlEQVR4nO3b6W6qQBiAYWaxw7gdxAXc2vu/y4qIgIKpQo7x433+lUaTeYPDDGIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQffo3WN5jV7Go/74dw/nJXrsbH8+tYFRvZnQgAY0kNDAuE4kNLDp6quDxVxAA5P4LmsjP7cCGvzrtMajwTAb3G4NhtdAB7skWVdfMLgGOhqdroY2rBwaWgMd2fOA3aY8NrgGG5uviFz5mqE1WBeLaxtfhzywBnrliu3B7HpwaA12RQM7l/xZ0Kv9gyTzy3xgQsmfBR27sHU4epmfCNauBZ8HOnHKpa3j8Wl2C9KoRfkSeQ2Cw2lEbtx+Juy28SitLhTFNfD5ye6W7RG897UJQ1yDYHaZ85L6kB5Mk9Ia+LRYBP181SbKRfu7SGswVVd2URnU1O5bv0wT1sBvKzea3a48PUJj4mlLBFkN9Lp6r91OouJ45LKV4bo5grAGe6uqEYqFUL5btGbXGEFUg3I3cN0UnCPoL3NpkjSNU1QDP7LqNsJ5Eig2Cc1rJ0kNKhvjMsJpJvTj8rgL7z8OkhoE8e1pkP1vdLouVv52x7vlkqAG2WapgTlua2nur5GSGkyaEmQz4e0cEdUjyGng//w9vLWr2nDlNJjO/pggWyjUrpFiGujomccxajdZBtpAua3A+0hPNlBuc708SGrQsDp4wByKLZSgBmr2nMnssoUS0+B0YXhe/i6CGryMBlIaJL6Tg4AG9vgddvCdrzA/u4Hq+NC+ktCgFzSgAQ0+u0H60+2p/ZoPbRB1eWb/1qf+uK9P7x4MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwHvzkNNPrHNmiDAAAAAElFTkSuQmCC";
        this.state = {
            List:[
                {id:1,name:'abc-1',imgurl:imgUrl,price:12.32},
                {id:2,name:'abc-2',imgurl:imgUrl,price:13.2},
                {id:3,name:'abc-3',imgurl:imgUrl,price:22.3}
            ],
            showModal:false,
            selectedItem:{id:0,name:'',imgurl:'',price:0}
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    displayProduct(){
        return this.state.List.map(product=>{
            
            let url = "/product/"+product.id;
            return <tr>
                <td>
                    {product.id}
                </td>                
                <td>
                    {product.name}
                </td>
                <td>
                    {product.price}
                </td>                
                <td>
                    <img src={product.imgurl} width='100px' height='100px'/>
                </td>
                <td>
                    <Link to={url}>Details</Link>
                    <Button onClick={()=>this.handleShow(product.id)}>Details</Button>
                </td>
            </tr>
        })
    }
    handleShow(id){
        for (let index = 0; index < this.state.List.length; index++) {
            const element = this.state.List[index];
            if(element.id==id)
            {
                this.setState({selectedItem:element});
                this.setState({showModal:true})
                break;
            }
        }
        
    }
    handleClose=()=>{
        this.setState({showModal:false})
    }
    
    render() {
        return (
            <div>
                <table className="table table-border">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                    {this.displayProduct()}
                </table>

                <Modal show={this.state.showModal} onHide={()=>this.handleClose()}>
        <Modal.Header closeButton>
        <Modal.Title>{this.state.selectedItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
            <br/>
            <span className="badge badge-pill badge-success">{this.state.selectedItem.price} $</span>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>this.handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>



            </div>
        );
    }
}

export default Productlist;