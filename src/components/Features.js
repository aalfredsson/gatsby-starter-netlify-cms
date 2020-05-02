import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link } from 'gatsby'


const FeatureGrid = ({ gridItems }) => (
    <div className="flex flex-col lg:flex-row mb-20 container">
        {gridItems.slice(0, 3).map(item => (
            <div key={item.text} className="lgm:pb-16 flex-1 lg:blurb-middle-item">
                <section className="flex flex-col cursor-pointer">
                    <Link to={'/lists/' + fixedEncodeURI(item.relation) + '/'}>
                        <div className="blurb-heading"><span>{item.textheading}</span></div>
                        <div className="flex flex-row">
                            
                            <div className="">
                                <div style={{
                                    width: '100px',
                                        display: 'inline-block',
                    }} className="pr-4">
                                    <PreviewCompatibleImage imageInfo={item} />
                                </div>
                            </div>
                            <div>
                                <span>{item.text}</span> →
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
        ))}
    </div>
)

function fixedEncodeURI(str) {
    return encodeURI(str).toLowerCase().replace(/%20/g, '-').replace(/%5B/g, '[').replace(/%5D/g, ']');
}

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
            textheading: PropTypes.string,
            relation: PropTypes.string
        })
    ),
}

export default FeatureGrid
