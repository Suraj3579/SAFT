import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';
import { Container, Row, Col } from 'react-bootstrap';
import {linearCategories, linearCategoriesParent} from '../../helpers/linearCategories';
import { useSelector, useDispatch } from 'react-redux';
import { createPage, getAllCategory } from '../../actions';

/**
* @author
* @function NewPage
**/

const NewPage = (props) => {

    const category = useSelector(state => state.category);
    const [createModal, setCreateModal] = useState(false);
    const [title, setTitle] = useState('');
    const [categories, setCategories] = useState([]);
    const [parentCategories, setParentCategories] = useState([]);
    const [childCategories,setChildCategories]=useState([]);
    const [grandChildrenCateogories, setGrandChildrenCateogories]=useState([]);
    const [parentCategoryId, setParentCategoryId] = useState('')
    const [childCategoryId, setChildCategoryId] = useState('');
    const [grandchildCategoryId, setGrandchildCategoryId] = useState('');

    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [banners, setBanners] = useState([]);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);


    useEffect(() => {
        dispatch(getAllCategory());
        setCategories(linearCategories(category.categories));
        setParentCategories(linearCategoriesParent(category.categories));
    }, [category]);


    // useEffect(() => {
    //     console.log(page);
    //     if(!page.loading){
    //         setCreateModal(false);
    //         setTitle('');
    //         setCategoryId('');
    //         setDesc('');
    //         setProducts([]);
    //         setBanners([]);
    //     }
    // }, [page]);

    const onCategoryChangeParent = (e) => {
        const category = categories.find(category => category.value == e.target.value);
        setParentCategoryId(e.target.value);
        console.log(categories);
        let childCat=[];
        for (let category of categories) {
            if(category.parentId==e.target.value)
            {
                childCat.push(category);
            }
        }
        console.log('childCat :>> ', childCat);
        setChildCategories(childCat);
        setGrandChildrenCateogories([]);
        setChildCategoryId('');
        // setType(category.type);
    }

    const onCategoryChangeChild = (e) => {
        const category = categories.find(category => category.value == e.target.value);
        setChildCategoryId(e.target.value);
        console.log(categories);
        let grandChildCats=[];
        for (let category of categories) {
            if(category.parentId==e.target.value)
            {
                grandChildCats.push(category);
            }
        }
        console.log('grandchildCat :>> ', grandChildCats);
        setGrandChildrenCateogories(grandChildCats);
        // setType(category.type);
    }

    const onCategoryChangeGrandChild = (e) => {
        // console.log('e.target.value :>> ', e.target.value);
        const category = categories.find(category => category.value == e.target.value);
        setGrandchildCategoryId(e.target.value);
        console.log(category);
    }

    

    const handleBannerImages = (e) => {
        console.log(e);
        setBanners([...banners, e.target.files[0]]);
    }

    const handleProductImages = (e) => {
        console.log(e);
        setProducts([...products, e.target.files[0]]);
    }

    const submitPageForm = (e) => {
        //e.target.preventDefault();

        if(price === ""){
            alert('Price is required');
            setCreateModal(false);
            return;
        }

        const serviceItem={
            parentId: childCategoryId,
        }
        // form.append('title', title);
        // form.append('description', desc);
        // form.append('category', categoryId);
        // form.append('type', type);
        // banners.forEach((banner, index) => {
        //     form.append('banners', banner);
        // });
        // products.forEach((product, index) => {
        //     form.append('products', product);
        // });

        // dispatch(createPage(form));

        
    }

    const renderCreatePageModal = () => {
        return (
            <Modal
                show={createModal}
                modalTitle={'Create New Page'}
                handleClose={() => setCreateModal(false)}
                onSubmit={submitPageForm}
            >
                <Container>
                    <Row>
                        <Col>
                            <Input 
                                type="select"
                                value={parentCategoryId}
                                onChange={onCategoryChangeParent}
                                options={parentCategories}
                                placeholder={'Select Top category'}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Input 
                                type="select"
                                value={childCategoryId}
                                onChange={onCategoryChangeChild}
                                options={childCategories}
                                placeholder={'Select child category'}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Input 
                                type="select"
                                value={grandchildCategoryId}
                                onChange={onCategoryChangeGrandChild}
                                options={grandChildrenCateogories}
                                placeholder={'Select sub services'}
                            />
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <Input
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder={'Price'}
                                className=""
                            />
                        </Col>
                    </Row>

                    {
                            banners.length > 0 ? 
                            banners.map((banner, index) => 
                                <Row key={index}>
                                    <Col>{banner.name}</Col>
                                </Row>
                            ) : null
                    }
                    <Row>
                        <Col>
                            <Input
                                className="form-control" 
                                type="file" 
                                name="banners"
                                onChange={handleBannerImages}
                            />
                        </Col>
                    </Row>

                    {
                            products.length > 0 ? 
                            products.map((product, index) => 
                                <Row key={index}>
                                    <Col>{product.name}</Col>
                                </Row>
                            ) : null
                        }
                    <Row>
                        <Col>
                            <Input 
                                className="form-control"
                                type="file" 
                                name="products"
                                onChange={handleProductImages}
                            />
                        </Col>
                    </Row>

                    

                </Container>


            </Modal>
        );
    }

    return (
        <Layout sidebar>
            {
                page.loading ? 
                <p>Creating Page...please wait</p>
                :
                <>
                    {renderCreatePageModal()}
                    <button onClick={() => setCreateModal(true)}>Create/Edit subservice</button>
                </>
            }
            
        </Layout>
    )

}

export default NewPage