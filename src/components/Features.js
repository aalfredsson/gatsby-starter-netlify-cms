import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
    <div className="flex flex-col lg:flex-row mb-16">
        {gridItems.slice(0, 3).map(item => (
            <div key={item.text} className="lgm:pb-12 flex-1 lg:blurb-middle-item">
                <section className="flex flex-col">
                    <div className="blurb-heading"><span>Flytta hit{item.textheading}</span></div>
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
                            <p>{item.text}</p>
                        </div>
                    </div>
                </section>
            </div>
        ))}
    </div>
)

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            text: PropTypes.string,
            textheading: PropTypes.string
        })
    ),
}

export default FeatureGrid
