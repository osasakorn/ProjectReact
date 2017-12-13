import React, { Component } from 'react';

import Footer from '../../Component/Footer/footer';
import Navbar from '../../Component/Navbar/navbar';

import '../../styles/semantic.min.css'
import { Button, Card, Image, Checkbox, Icon, Table } from 'semantic-ui-react'
import './manage.css';



const TableExampleApprove = () => (


  <div className="manage">
    <Navbar /> <br />

    <div>
          <h2 class="ui icon center aligned header">
            <i aria-hidden="true" class="privacy circular icon"></i>
            <div class="content">MANAGEMENT</div>
          </h2>
        </div>
        <br/>

    <div class="ui centered cards">
      <div class="ui card">
        <div class="content">
          <img class="ui mini right floated image" src="/assets/images/avatar/large/steve.jpg" />
          <div class="header">Steve Sanders</div>
          <div class="meta">Friends of Elliot</div>
          <div class="description">Steve wants to add you to the group <strong>best friends</strong>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button" role="button">Approve</button>
            <button class="ui red basic button" role="button">Decline</button>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
          <div class="header">Molly Thomas</div>
          <div class="meta">New User</div>
          <div class="description">Molly wants to add you to the group <strong>musicians</strong>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button" role="button">Approve</button>
            <button class="ui red basic button" role="button">Decline</button>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <img class="ui mini right floated image" src="/assets/images/avatar/large/jenny.jpg" />
          <div class="header">Jenny Lawrence</div>
          <div class="meta">New User</div>
          <div class="description">Jenny requested permission to view your contact details</div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button" role="button">Approve</button>
            <button class="ui red basic button" role="button">Decline</button>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
          <div class="header">Molly Thomas</div>
          <div class="meta">New User</div>
          <div class="description">Molly wants to add you to the group <strong>musicians</strong>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button" role="button">Approve</button>
            <button class="ui red basic button" role="button">Decline</button>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
          <div class="header">Molly Thomas</div>
          <div class="meta">New User</div>
          <div class="description">Molly wants to add you to the group <strong>musicians</strong>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button" role="button">Approve</button>
            <button class="ui red basic button" role="button">Decline</button>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
          <div class="header">Molly Thomas</div>
          <div class="meta">New User</div>
          <div class="description">Molly wants to add you to the group <strong>musicians</strong>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button" role="button">Approve</button>
            <button class="ui red basic button" role="button">Decline</button>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
          <div class="header">Molly Thomas</div>
          <div class="meta">New User</div>
          <div class="description">Molly wants to add you to the group <strong>musicians</strong>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button" role="button">Approve</button>
            <button class="ui red basic button" role="button">Decline</button>
          </div>
        </div>
      </div>
      <div class="ui card">
        <div class="content">
          <img class="ui mini right floated image" src="/assets/images/avatar/large/molly.png" />
          <div class="header">Molly Thomas</div>
          <div class="meta">New User</div>
          <div class="description">Molly wants to add you to the group <strong>musicians</strong>
          </div>
        </div>
        <div class="extra content">
          <div class="ui two buttons">
            <button class="ui green basic button" role="button">Approve</button>
            <button class="ui red basic button" role="button">Decline</button>
          </div>
        </div>
      </div>
    </div>

    <div class="ui centered grid">
     
      <div class="fourteen wide column">

      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
              <Button floated='right' icon labelPosition='left' primary size='small'>
                <Icon name='user' /> Add User
                </Button>
              <Button size='small'>Approve</Button>
              <Button disabled size='small'>Approve All</Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      
      </div>
      
    </div>
    <br />
    <Footer />
  </div>
);
export default TableExampleApprove;

