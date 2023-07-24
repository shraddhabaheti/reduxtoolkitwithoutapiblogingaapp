import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap';
const PaginationApi = () => {
    const [data, setData] = useState('');
    const [item, setItem] = useState([]);
    const [active, setActive] = useState(0);
    const [curr, setCurr] = useState(1);
    let perpage = 50;
    const fetchComment = async (currentValue) => {
        
        let val = currentValue
        setCurr(val);
        setActive(currentValue);
        if (currentValue === 0) {
            const res = await fetch(`https://api-staging.es-pal.org/portal_api/individual/?limit=${perpage}&offset=0`)
            const item = await res.json();
            console.log(item)
            setData(item)
        } else if (currentValue > 1) {
            let offset = currentValue * perpage
            const res = await fetch(`https://api-staging.es-pal.org/portal_api/individual/?limit=${perpage}&offset=${offset}`)
            const item = await res.json();
            setData(item)
        }
    }

  
    const previous = () => {
        fetchComment(curr + 1)
    }
    const lastStep = () => {
        if (curr === 1) {
            fetchComment(curr + 2);
        }
        fetchComment(curr + 1);
    }
    useEffect(() => {
        const pageNumber = [];
        for (let i = 1; i <= Math.ceil(261 / perpage); i++) {
            pageNumber.push(i);
        }
        pageNumber.pop();
        setItem(pageNumber);
        fetchComment(0);
    }, [])

    return (
        <div>
            <h1>Pagination</h1>
            <Table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>UserName</td>
                        <td>LastName</td>
                        <td>Country</td>
                        <td>Email</td>
                        <td>address</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.results?.map((curElem, index) => {
                            return (
                                <tr key={index} >
                                    <td>{curElem.id}</td>
                                    <td>{curElem.username}</td>
                                    <td>{curElem.lastname}</td>
                                    <td>{curElem.country}</td>
                                    <td>{curElem.email}</td>
                                    <td>{curElem.address}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Pagination className="d-flex justify-content-center">
                <button onClick={previous} disabled={curr === 0 ? true : false}>prev</button>
                {item.map(function (currentValue, index, arr) {
                    return (
                        <Pagination.Item onClick={() => { fetchComment(currentValue); }} active={active === 0 || active === 1 ? currentValue === 1 : currentValue === active} key={index}>
                            {currentValue}
                        </Pagination.Item>
                    );
                })}
                <button onClick={lastStep} disabled={curr === item.length?true :false} >Next</button>
                <h2>page {curr===0?"1":curr} of {item.length}</h2>
            </Pagination>
        </div>
    )
}

export default PaginationApi

