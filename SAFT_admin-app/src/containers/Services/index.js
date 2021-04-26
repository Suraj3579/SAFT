import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllCategory,
    addCategory,
    updateCategories,
    deleteCategories as deleteCategoriesAction
} from '../../actions';
import Modal from '../../components/UI/Modal';
import CheckboxTree from 'react-checkbox-tree';
import {
    IoIosCheckboxOutline,
    IoIosCheckbox,
    IoIosArrowForward,
    IoIosArrowDown,
    IoIosAdd,
    IoIosTrash,
    IoIosCloudUpload
} from 'react-icons/io'

import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import UpdateCategoriesModal from './components/UpdateCategoriesModal';
import AddCategoryModal from './components/AddCategoryModal';
import './style.css';
import { useHistory } from 'react-router';

/**
* @author
* @function Category
**/

const Category = (props) => {
    const category = useSelector(state => state.category);
    // const categories=useSelector(state=>state.categories);
    const [categoryName, setCategoryName] = useState('');
    const [parentCategoryId, setParentCategoryId] = useState('');
    const [categoryImage, setCategoryImage] = useState('');
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);
    const [checkedArray, setCheckedArray] = useState([]);
    const [expandedArray, setExpandedArray] = useState([]);
    const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
    const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getAllCategory());
    }, []);
    const handleClose = () => {


        if (categoryName === "") {
            alert('Category name is required');
            setShow(false);
            return;
        }
        
        var form=new FormData();
        form.append('name', categoryName);
        form.append('parentId', parentCategoryId);
        form.append('servicePictures', categoryImage);
        
        console.log("form",form);
        dispatch(addCategory(form));
        setCategoryName('');
        setParentCategoryId('');
        setShow(false);
    }
    const handleShow = () => setShow(true);

    const renderCategories = (categories) => {
        let myCategories = [] ;
        for (let category of categories) {
            myCategories.push(
                {
                    label: category.name,
                    value: category._id,
                    children: category.children.length > 0 && renderCategories(category.children)
                }
            );
        }
        return myCategories;
    }

    const createservicesList = (categories, options = []) => {

        for (let category of categories) {
            options.push({
                value: category._id,
                name: category.name,
                parentId: category.parentId,
                // type: category.type
            });
            if (category.children.length > 0) {
                createservicesList(category.children, options)
            }
        }

        return options;
    }

    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
        console.log(e.target.files);
    }

    const updateCategory = () => {
        updateCheckedAndExpandedCategories();
        setUpdateCategoryModal(true);
    }

    const updateCheckedAndExpandedCategories = () => {
        const categories = createservicesList(category.categories);
        const checkedArray = [];
        const expandedArray = [];
        checked.length > 0 && checked.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value);
            category && checkedArray.push(category);
        })
        expanded.length > 0 && expanded.forEach((categoryId, index) => {
            const category = categories.find((category, _index) => categoryId == category.value);
            category && expandedArray.push(category);
        })
        setCheckedArray(checkedArray);
        setExpandedArray(expandedArray);
    }

    const handleCategoryInput = (key, value, index, type) => {
        console.log(value);
        if (type == "checked") {
            const updatedCheckedArray = checkedArray.map((item, _index) =>
                index == _index ? { ...item, [key]: value } : item);
            setCheckedArray(updatedCheckedArray);
        } else if (type == "expanded") {
            const updatedExpandedArray = expandedArray.map((item, _index) =>
                index == _index ? { ...item, [key]: value } : item);
            setExpandedArray(updatedExpandedArray);
        }
    }

    const updateCategoriesForm = () => {
        const form = new FormData();

        // expandedArray.forEach((item, index) => {
        //     form.append('_id', item.value);
        //     form.append('name', item.name);
        //     form.append('parentId', item.parentId ? item.parentId : "");
        //     form.append('type', item.type);
        // });
        checkedArray.forEach((item, index) => {
            form.append('_id', item.value);
            form.append('name', item.name);
            form.append('parentId', item.parentId ? item.parentId : "");
            form.append('type', item.type);
        });
        dispatch(updateCategories(form));
        
    }

    const deleteCategory = () => {
        updateCheckedAndExpandedCategories();
        console.log("expandedArray",expandedArray);
        console.log("checkedArray",checkedArray);
        setDeleteCategoryModal(true);
    }

    const deleteCategories = () => {
        const checkedIdsArray = checkedArray.map((item, index) => ({ _id: item.value }));
        const expandedIdsArray = expandedArray.map((item, index) => ({ _id: item.value }));
        const idsArray = expandedIdsArray.concat(checkedIdsArray);

        if (idsArray.length > 0) {
            dispatch(deleteCategoriesAction(idsArray))
                .then(result => {
                    if (result) {
                        dispatch(getAllCategory())
                        setDeleteCategoryModal(false)
                    }
                });
        }

        setDeleteCategoryModal(false);


    }

    const renderDeleteCategoryModal = () => {
        return (
            <Modal
                modalTitle="Confirm"
                show={deleteCategoryModal} 
                handleClose={() => setDeleteCategoryModal(false)}
                buttons={[
                    {
                        label: 'No',
                        color: 'primary',
                        onClick: () => {
                            setDeleteCategoryModal(false);
                        }
                    },
                    {
                        label: 'Yes',
                        color: 'danger',
                        onClick: deleteCategories
                    }
                ]}
            >

                <h2 style={{color:'red'}}>All these will be deleted!!!</h2>
                <p>To delete a top category, please expand it</p>
                <h5><b>Expanded</b></h5>
                { expandedArray.map((item, index) => <li key={index}>{item.name}</li>)}
                <h5><b>Checked</b></h5>
                { checkedArray.map((item, index) => <li key={index}>{item.name}</li>)}

            </Modal>
        );
    }

    const servicesList = createservicesList(category.categories);
    return (
        <Layout sidebar>
            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3>Services</h3>
                            <div className="actionBtnContainer">
                                <span>Actions: </span>
                                <button onClick={handleShow}><IoIosAdd /> <span>Add</span></button>
                                <button onClick={deleteCategory}><IoIosTrash /> <span>Delete</span></button>
                                <button onClick={updateCategory}><IoIosCloudUpload /> <span>Edit</span></button>
                            </div>

                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <CheckboxTree
                            nodes={renderCategories(category.categories)}
                            checked={checked} 
                            expanded={expanded}
                            onCheck={checked => setChecked(checked)}
                            onExpand={expanded => setExpanded(expanded)}
                            icons={{
                                check: <IoIosCheckbox />,
                                uncheck: <IoIosCheckboxOutline />,
                                halfCheck: <IoIosCheckboxOutline />,
                                expandClose: <IoIosArrowForward />,
                                expandOpen: <IoIosArrowDown />
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <AddCategoryModal
                show={show}
                handleClose={() =>setShow(false)}
                onSubmit={handleClose}
                modalTitle={'Add New Category'}
                categoryName={categoryName}
                setCategoryName={setCategoryName}
                parentCategoryId={parentCategoryId}
                setParentCategoryId={setParentCategoryId}
                servicesList={servicesList}
                handleCategoryImage={handleCategoryImage}
            />
            <UpdateCategoriesModal
                show={updateCategoryModal}
                handleClose={() => setUpdateCategoryModal(false)}
                onSubmit={updateCategoriesForm}
                modalTitle={'Update Categories'}
                size="lg"
                expandedArray={expandedArray}
                checkedArray={checkedArray}
                handleCategoryInput={handleCategoryInput}
                servicesList={servicesList}
            />
            {/* {renderAddCategoryModal()} */}
            {renderDeleteCategoryModal()}
        </Layout>
    )

}

export default Category