import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
    <div className="flex flex-col lg:flex-row">
        {gridItems.slice(0, 3).map(item => (
            <div key={item.text} className="pb-8">
                <section className="flex flex-row">
                    <div className="">
                        <div style={{
                             width: '100px',
                                display: 'inline-block',
              }} className="px-4">
                            <PreviewCompatibleImage imageInfo={item} />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-2xl">Babababa{item.textheading}</h4>
                        <p>{item.text}</p>
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
