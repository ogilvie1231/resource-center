import React, { Component } from "react";
import API from "../utils/API";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class SQL extends Component {
  state = {
    sqlInfo: []
  };

  componentDidMount() {
    this.loadAll();
  }

  loadAll = () => {
    API.getAll("visualstudiocode")
      .then(res => {
        this.setState({
          sqlInfo: res.data
        });
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  delete = (category, id) => {
    API.deleteOne(id)
      .then(res => this.loadAll())

      .catch(err => console.log(err));
  };

  render() {
    return (

    <div>
        
        <div style={{marginLeft: '5%', marginRight: '5%', padding: '1px 16px', height: '1000px', marginTop: '2%'}}>
          <div className="card">
            <div className="card-header">
              <h1>MySQL</h1>
              <img src="./images/mysqlLogo.jpg" className="titleimg" alt="mysql logo"/>
            </div>
            <div className="card-body">
              <h5 className="card-title">Quick Links</h5>
              <p className="card-text">You can find more info, documents and very detailed videos in the buttons below.
              </p>
              <a href="https://www.mysql.com/products/workbench/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go to
                MySQL</a>
              <a href="https://www.mysql.com/products/workbench/" className="btn btn-success" target="_blank" rel="noopener noreferrer">MySQL
                Documents</a>
              <a href="https://www.youtube.com/watch?v=iP1wOSsKjW8&list=PLS1QulWo1RIahlYDqHWZb81qsKgEvPiHn" className="btn btn-info" target="_blank" rel="noopener noreferrer">MySQL Videos</a>
              <a href="https://www.w3schools.com/sql/default.asp" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">MySQL
                W3Schools</a>
            </div>
          </div>
          <br />
          <h3>What is MySQL</h3>
          <p>MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation).[8] In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.</p>
          <p>MySQL has received positive reviews, and reviewers noticed it "performs extremely well in the average case" and that the "developer interfaces are there, and the documentation (not to mention feedback in the real world via Web sites and the like) is very, very good".[20] It has also been tested to be a "fast, stable and true multi-user, multi-threaded sql database server".<a href="https://en.wikipedia.org/wiki/MySQL">Wikipedia</a></p>
          <iframe title="mysql"width={560} height={315} src="https://www.youtube.com/embed/iP1wOSsKjW8" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <hr />
          <div className="container">
            <div className="card-deck">
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="mysql"width={320} height={215} src="https://www.youtube.com/embed/7S_tz1z_5bA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                    content.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=7S_tz1z_5bA" role="button" target="_blank" rel="noopener noreferrer">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="mysql"width={320} height={215} src="https://www.youtube.com/embed/HXV3zeQKqGY" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=HXV3zeQKqGY" role="button" target="_blank" rel="noopener noreferrer">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe title="mysql"width={320} height={215} src="https://www.youtube.com/embed/nN4Kjdverzs" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This card has supporting text below as a natural lead-in to additional
                    content.</p>
                  <hr />
                  <a className="btn btn-success" href="https://www.youtube.com/watch?v=nN4Kjdverzs&list=PL41lfR-6DnOokmJfmYj2hdVMKVGIcF7__" role="button" target="_blank" rel="noopener noreferrer">More
                    videos Here</a>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <br />
                {this.state.sqlInfo.length ? (
            this.state.sqlInfo.map(info => (
              <Card
                key={info._id}
                className="container"
                style={{ width: "18rem", marginTop: "7rem" }}
              >
                <Card.Body>
                  <Card.Title className="container text-center">
                    <h2>{info.title}</h2>
                  </Card.Title>
                  <Card.Text>{info.summary}</Card.Text>
                  <Button className="container"
                  style={{margin: "2px"}}
                    href={info.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    variant="primary"
                  >
                    Find out more
                    </Button>

                  <Button
                  style={{margin: "2px"}}
                  className="container"
                    onClick={() =>
                      this.delete(info.category, info._id) +
                      console.log("info: ", info)
                    }
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h3>No Results to Display</h3>
          )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
}
export default SQL;