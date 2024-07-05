import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import Filter from "../../assets/filter.svg";

const data = [
  {
    bill_date: "2023-05-30",
    bill_no: "1123",
    date: "2023-05-24",
    doctor: "AJITH",
    eta: "2023-05-24 17:28:04",
    has_result: true,
    hospital_id: "546AVBG",
    is_eta_crossed: false,
    lab: "Aswini Diagnostics-Calicut",
    order_id: 13937,
    orderline_id: 47039,
    order_ref: "A13672",
    patient_details: {
      age: 0,
      bill_date: "2023-05-30",
      bill_no: "1123",
      gender: false,
      patient_name: "VIDHYA KT"
    },
    patient_name: "VIDHYA KT",
    result: [
      {
        attachment: "https://www.africau.edu/images/default/sample.pdf",
        id: 124242,
        line_id: 47039
      }
    ],
    status: "Ready",
    test_name: "Lipid Profile - Fasting"
  },
  {
    bill_date: "2023-05-30",
    bill_no: "1123",
    date: "2023-05-24",
    doctor: "Anoop",
    eta: "2023-05-24 17:28:04",
    has_result: true,
    hospital_id: "546AVBG",
    is_eta_crossed: false,
    lab: "Aswini Diagnostics-Calicut",
    order_id: 13938,
    orderline_id: 47039,
    order_ref: "A13672",
    patient_details: {
      age: 0,
      bill_date: "2023-05-30",
      bill_no: "1123",
      gender: false,
      patient_name: "Anu"
    },
    patient_name: "Anu",
    result: [
      {
        attachment: "https://www.africau.edu/images/default/sample.pdf",
        id: 124242,
        line_id: 47039
      }
    ],
    status: "Ready",
    test_name: "Lipid Profile - Fasting"
  },
  {
    bill_date: "2023-05-30",
    bill_no: "1123",
    date: "2023-05-24",
    doctor: "Anusree",
    eta: "2023-05-24 17:28:04",
    has_result: true,
    hospital_id: "546AVBG",
    is_eta_crossed: false,
    lab: "Aswini Diagnostics-Calicut",
    order_id: 13939,
    orderline_id: 47039,
    order_ref: "A13672",
    patient_details: {
      age: 0,
      bill_date: "2023-05-30",
      bill_no: "1123",
      gender: false,
      patient_name: "Manu"
    },
    patient_name: "Manu",
    result: [
      {
        attachment: "https://www.africau.edu/images/default/sample.pdf",
        id: 124242,
        line_id: 47039
      }
    ],
    status: "Ready",
    test_name: "Lipid Profile - Fasting"
  }
];

const columns = [
  { title: 'ID', field: 'order_id' },
  { title: 'Patient Name', field: 'patient_name' },
  { title: 'Doctor', field: 'doctor' },
  { title: 'Test Name', field: 'test_name' },
  { title: 'Status', field: 'status' },
  { title: 'Bill Date', field: 'bill_date' },
  { title: 'Bill No', field: 'bill_no' },
];

const PostList = () => {
  const initialFilterState = columns.reduce((acc, column) => {
    acc[column.field] = '';
    return acc;
  }, {});

  const [filter, setFilter] = useState(initialFilterState);
  const [filteredData, setFilteredData] = useState(data);
  const [showForm, setShowForm] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setFilteredData(
      data.filter((row) => {
        return columns.every((column) => {
          const filterValue = filter[column.field].toLowerCase();
          const rowValue = row[column.field] ? row[column.field].toString().toLowerCase() : '';
          return rowValue.includes(filterValue);
        });
      })
    );
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <Container>
      <Row>
        <h3 style={{ color: "#1F6CAB" }}>Patient Reports</h3>
        <Col className="d-flex justify-content-start mb-3">
          <Button onClick={toggleFormVisibility} style={{ marginLeft: "700px" }}>
            {showForm ? 'Hide Filter' : 'Show Filter'} <img src={Filter} alt='filter' style={{ marginLeft: "10px" }} />
          </Button>
          <input type="search"placeholder="Search here..."   style={{marginLeft:"10px"}}/>
        </Col>
      </Row>
      {showForm && (
        <Row>
          <Col>
            <Form onSubmit={handleFilterSubmit}>
              {columns.map((column) => (
                <Form.Group key={column.field} controlId={`form${column.field}`}>
                  <Form.Label>{column.title}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={`Enter ${column.title}`}
                    name={column.field}
                    value={filter[column.field]}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              ))}
              <Button variant="primary" type="submit">
                Apply Filter
              </Button>
            </Form>
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.field}>{column.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  {columns.map((column) => (
                    <td key={column.field}>{row[column.field]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default PostList;
