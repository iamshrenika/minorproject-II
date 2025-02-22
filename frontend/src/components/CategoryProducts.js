import logo from '../logo.svg';
import SingleProduct from './SingleProduct';
function CategoryProducts() {
    return (
        <section className='container mt-4'>
            <h3 className="text-center mb-4">Abcdshb <a href='#' className='float-end btn btn-light m-2'></a></h3>
                <div className="row mt-4">
                    <SingleProduct title="Beaded Necklace"/>
                    <SingleProduct title="Beaded Bracelet"/>
                    <SingleProduct title="Clay Ring"/>
                    <SingleProduct title="Handmade Jewellery"/>
                    <SingleProduct title="Handmade Jewellery"/>
                    <SingleProduct title="Handmade Jewellery"/>
                    <SingleProduct title="Handmade Jewellery"/>
                    <SingleProduct title="Handmade Jewellery"/>
                </div>
                {/* Pagination */}
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                    </nav>
        </section>
    );
  }
  
  export default CategoryProducts;