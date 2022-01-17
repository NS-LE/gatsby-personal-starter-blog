import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image, Input, Icon, Label, Item, Header } from 'semantic-ui-react'

export default function Posts()  {
    
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`mockData.json`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        
      <div className="ui grid">
      <div className="ui form six wide column centered">
      <Header as='h1'>Procedure Search</Header>                   
            <Input icon="search" placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
           <Item.Group className="ui">
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                          <Item className="ui raised segment">
                            <Item.Image size='small' src={item.profilepic} /> 
                            <Item.Content>
                              <Item.Header as='a'>{item.Doctor}</Item.Header>
                              <Item.Description>{item.procedure} <Label.Group tag><Label color="green">{item.packageprice} Rs</Label></Label.Group></Item.Description>
                              <Item.Extra>{item.Hospital}, {item.City}</Item.Extra>
                            </Item.Content>
                          </Item>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                          <Item className="ui raised segment">
                          <Item.Image size='small' src={item.profilepic} /> 
                          <Item.Content>
                            <Item.Header as='a'>{item.Doctor}</Item.Header>
                            <Item.Description>{item.procedure} <Label.Group tag><Label color="green">{item.packageprice} Rs</Label></Label.Group></Item.Description>
                            <Item.Extra>{item.Hospital}, {item.City}</Item.Extra>
                          </Item.Content>
                        </Item>
                        )
                    })
                )}
             </Item.Group>
        </div>
        </div>
    )
}
