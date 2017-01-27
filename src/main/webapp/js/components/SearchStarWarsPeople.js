import React from 'react';

class SearchStarWarsPeople extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        }
    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json')
            .then(response => response.json())
            .then(function(result) {
                this.setState({items: result.results});
                this.initialItems = result.results;
            }.bind(this))
    }

    filter(e) {
        let items,
            val = e.target.value;

        if(!val) {
            items = this.initialItems;
        } else {
            items = this.initialItems.filter((item) => item.name.toLowerCase().includes(val.toLowerCase()))
        }

        this.setState({items: items});
    }

    render() {
        let items = this.state.items;

        return (
            <div>
                <input type="text"
                       onChange={this.filter.bind(this)}/>
                {items.map(item => <h4 key={item.name}>{item.name}</h4>) }
            </div>
        )
    }
}

export default SearchStarWarsPeople;