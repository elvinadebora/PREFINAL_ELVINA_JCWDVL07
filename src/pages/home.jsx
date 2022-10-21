import React from "react";
import Redux from "redux";
import "../style/home.css";
import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  NavLink,
} from "reactstrap";

class Home extends React.Component {
  render() {
    return (
      <div
        className="container-fluid px-0 pb-0 "
        style={{ backgroundColor: "rgba(245, 245, 245, 1)" }}
      >
        <div className="container-fluid foto-sampul d-flex align-items-end ">
          <div className="container d-flex ">
            <div className="photo-profile rounded-circle  ">
              <img
                src="https://images.unsplash.com/photo-1665054983503-a8395f102989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className=" d-flex flex-row username ms-2">
              <h1>Elvina</h1>
              <div className="pt-2 px-3">
                <button
                  onClick={() => this.props.loginUser(this.state)}
                  className="login"
                >
                  <NavLink href="/Profile">Profile</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
        <CardGroup>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://blog.wego.com/wp-content/uploads/Bromo_tuojbb-980x654.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Keanuagl</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Mount Bromo, Tosari
              </CardSubtitle>
              <CardText>
                Located about 65.2 km away from Juanda International Airport
                (SUB), the mountainous terrain and luscious tropical rainforests
                of Mount Bromo, East Java, feature a diverse ecosystem.
              </CardText>
              <button
                onClick={() => this.props.loginUser(this.state)}
                className="login"
              >
                ❤ Like
              </button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://res.cloudinary.com/wegowordpress/image/upload/v1604649357/Campuhan_Ubud_faalqt.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Aurora</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Ubud, Bali
              </CardSubtitle>
              <CardText>
                Standing at the forefront of Bali rich cultural heritage, Ubud
                is where many painters and other artisans gather and owe their
                sense of belonging.
              </CardText>
              <button
                onClick={() => this.props.loginUser(this.state)}
                className="login"
              >
                ❤ Like
              </button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://res.cloudinary.com/wegowordpress/image/upload/v1604902980/Danau-Toba_1_xq7wxw.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Bryan</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Lake Toba, Medan
              </CardSubtitle>
              <CardText>
                Known for its panoramic views, the idyllic Lake Toba is
                Southeast Asia deepest lake with an island roughly the size of
                Singapore at its center!
              </CardText>
              <button
                onClick={() => this.props.loginUser(this.state)}
                className="login"
              >
                ❤ Like
              </button>
            </CardBody>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://res.cloudinary.com/wegowordpress/image/upload/v1604649344/Lembang_Bandung_zkgmo3.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Asep</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Lembang, Bandung
              </CardSubtitle>
              <CardText>
                Lembang is known for its cool and relaxing mountain weather as
                well as its yet-to-be-disturbed natural beauty.
              </CardText>
              <button
                onClick={() => this.props.loginUser(this.state)}
                className="login"
              >
                ❤ Like
              </button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://res.cloudinary.com/wegowordpress/image/upload/v1604649389/Appalarang_busw0f.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Diandra</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Appalarang, Bulukumba
              </CardSubtitle>
              <CardText>
                ndonesia has no shortage of hidden breathtaking coastlines,
                exemplified perfectly by the pristine turquoise waters of
                Appalarang beach in Bulukumba, Makassar.
              </CardText>
              <button
                onClick={() => this.props.loginUser(this.state)}
                className="login"
              >
                ❤ Like
              </button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://res.cloudinary.com/wegowordpress/image/upload/v1604649423/Seribu_Archipelago_ckottd.jpg"
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h5">Ayudia</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Kepulauan Seribu, Jakarta
              </CardSubtitle>
              <CardText>
                Its hard to fathom that such a pristine cluster of islands are
                within close proximity to the nation hectic capital of Jakarta.
              </CardText>
              <button
                onClick={() => this.props.loginUser(this.state)}
                className="login"
              >
                ❤ Like
              </button>
            </CardBody>
          </Card>
        </CardGroup>

        <div className="footer">
          <div className="pulau">Sumatera</div>

          <div className="pulau">Jawa</div>

          <div className="pulau">Bali</div>

          <div className="pulau">Kalimantan</div>

          <div className="pulau">Sulawesi</div>

          <div className="pulau">Papua</div>
        </div>
      </div>
    );
  }
}

export default Home;
