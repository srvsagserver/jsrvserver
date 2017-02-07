import React from 'react';

// This commponent is added just for now to make development faster
// should be rather removed or shown only to specific role
class Swagger extends React.Component {
    render() {
        return (
            <iframe src="swagger-ui/index.html"
                    rameborder="0"
                    marginHeight="0"
                    marginWidth="0"
                    width="100%"
                    height="900"
                    scrolling="auto"
                    target='_top'
                    title="Swagger UI">
            </iframe>

        )
    }
}

export default Swagger;
