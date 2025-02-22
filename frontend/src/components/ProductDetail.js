import logo from '../logo.svg';
import {Link} from 'react-router-dom'
import SingleProduct from './SingleProduct';
function ProductDetail(){
    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-4">
                    <div id="productThumbnailSlider" className="carousel carousel-dark slide carousel-fade" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={logo} className="img-thumbnail mb-5" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={logo} className="img-thumbnail mb-5" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <div className="col-8">
                    <h1>Product Title</h1>
                    <p>Ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <h5 className='card-title'>Price: Rs. 500</h5>
                    <p className='mt-3'>
                        <button title='Add to Cart' className='btn btn-success'>
                            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                        </button>
                        <button title='Buy Now' className='btn btn-warning ms-1'>
                            <i className="fa-solid fa-bag-shopping"></i> Buy Now
                        </button>
                        <button title='Add to Wishlist' className='btn btn-danger ms-1'>
                            <i className="fa fa-heart"></i> Wishlist
                        </button>
                    </p>
                    <hr/>
                    <div className='producttags mt-4'>
                        <h5>Tags</h5>
                        <p>
                            <Link to="#" className='badge bg-secondary text-white me-1'>necklace</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>bracelet</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>ring</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>necklace</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>bracelet</Link>
                            <Link to="#" className='badge bg-secondary text-white me-1'>ring</Link>
                        </p>
                    </div>
                </div>

            </div>
            {/* Related Products */}
            <h3 className="mt-5 mb-3">Related Products</h3>
            <div id="relatedProductsSlider" className="carousel carousel-dark slide bg-light" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row mb-5">
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-5">
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row mb-5">
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        <SingleProduct title="Clay Ring"/>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
                </div>
            {/* End Related Products */}
        </section>
    );
}

export default ProductDetail;