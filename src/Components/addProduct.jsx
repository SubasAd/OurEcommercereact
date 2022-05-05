import React, { Component } from "react";
import httpService from "../Services/httpService";
import apiUrl from "../config.json";
import Input from "./SmallerComponents/input";
class AddProduct extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    product :{
     price:0,
     name:"",
     isDeleted:false,
     onStock:0,
     pic:"",
     description:"",
     tags:[]
    },
    tags:""

  };
  Endpoint = apiUrl.apiUrl + "/api/admin/products";
 callApi = async ()=> {
    try {
      const jwt = localStorage.getItem("jwt");

      const data = await httpService.post(this.Endpoint, this.state.product,
        {
          headers: {
            Authorization: `Bearer ${jwt}`
          },
        }


      );
     
    } catch (e) {
      console.log(e.response);

    }
  }

  handleSubmit= async (x)=>{
    x.preventDefault();
   
   
    
  await this.callApi();
  }

  
 
   handleChange = ({ currentTarget: input }) => {
      const product = { ...this.state.product };
      product[input.name] = input.value;
  
      this.setState({ product} );

    };
    handleTagChange=({currentTarget:input})=>{
    const tags = input.value;
       this.setState({tags});
       const arr =  this.state.tags.split(',');
       const product = {...this.state.product};
       product.tags= arr.map((tag)=>{ return {name:tag.trim()}});
       this.setState({product})

    }
  async componentDidMount() {
    
  }
  componentDidUpdate(prevprops) {
   
  }
  componentWillUnmount() {}

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
      <Input
            name="price"
            label="Price"
            value={this.state.product.price}
            onChange={this.handleChange}
            type="number"
          />
          <Input
            name="name"
            value={this.state.product.name}
            type="text"
            id="name"
            label="Name"
            onChange={this.handleChange}
          />
          <Input
            name="onStock"
            value={this.state.product.onStock}
            type="text"
            id="onStock"
            label="On Stock"
            onChange={this.handleChange}
          />
          <Input
            name="pic"
            value={this.state.product.pic}
            type="text"
            id="pic"
            label="Pic Url"
            onChange={this.handleChange}
          />
          <Input
            name="description"
            value={this.state.product.description}
            type="text"
            id="description"
            label="Description"
            onChange={this.handleChange}
          />
          <Input
            name="tags"
            value={this.state.tags}
            type="text"
            id="tags"
            label="Tags"
            onChange={this.handleTagChange}
          />

          <button type="submit" className="btn btn-primary  p-2 m-2">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default AddProduct;
