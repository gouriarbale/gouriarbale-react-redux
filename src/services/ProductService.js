import API from "../api/API";
import endpoints from "../api/endpoints.json";
class ProductService {
  static fetchProduct(id) {
    return API.get(endpoints.api.product.getSingle + id);
  }

  static fetchProducts() {
    return API.get(endpoints.api.product.getAll);
  }
  static fetchCategories() {
    return API.get(endpoints.api.categories.getAll);
  }
}

export default ProductService;
