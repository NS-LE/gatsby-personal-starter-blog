import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Image, Input, Icon, Menu, Header } from 'semantic-ui-react'

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
      <Header as='h1'>Doctor Search</Header>            
            <Input icon="search" placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={1} style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card key={item.id} className="ui raised card">
                                <Image src={item.profilepic} alt="Card image" />
                                <Card.Content>    
                                    <Card.Header>{item.Doctor}</Card.Header>
                                    <Card.Description>
                                    <div className="meta">{item.Specialty}</div>
                                    <div className="extra content">
                                        {item.Hospital}</div>
                                        <Icon name="map"/>{item.City}
                                    
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                            <Card key={item.id} className="ui raised card">
                                <Image src={item.profilepic} alt="Card image" />
                                <Card.Content>    
                                    <Card.Header>{item.Doctor}</Card.Header>
                                    <Card.Description>
                                    <div className="meta">{item.Specialty}</div>
                                    <div className="extra content">
                                        {item.Hospital}</div>
                                        <Icon name="map"/>{item.City}
                                    
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
        </div>
    )
}
