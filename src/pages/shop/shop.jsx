import React from 'react';

import ShopData from './shopdata';
import PreviewCollection from '../../components/preview-collection/preview-collection';


class ShopPage extends React.Component {
    constructor(props){
        super(props);


        this.state = {
            collections: ShopData

            };
        }
            
            render() {
                const {collections} = this.state;
                return (
                <div className='ShopPage'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                <PreviewCollection key={id} {...otherCollectionProps} />
                ))
                }
                </div>
                );
            }
        }


export default ShopPage;