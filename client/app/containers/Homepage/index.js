// /*
//  Homepage
//  */

// import React from 'react';
// import { connect } from 'react-redux';
// import { Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
// import "../../styles/core/_homepage.scss"
// import actions from '../../actions';
// import banners from './banners.json';
// import CarouselSlider from '../../components/Common/CarouselSlider';
// import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

// const dt = new Date();
// class Homepage extends React.PureComponent {
//   render() {
//     return (
//       <div className='homepage'>
//         {/* <Title /> */}
//         <p className='greet'>
//           {
//             dt.getHours() < 12 ? "Good Morning" : 'Good Afternoon'
//           }
//         </p>
//         <Row className='flex-row'>
          
//           <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
//             <div className='d-flex flex-column h-100 justify-content-between'>
//               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
//                 <CardImg top src='./image/2.jpeg' alt='Card image cap' />
//                 <CardBody>
//                   <CardTitle className='text-center fw-bold'>Digital Art</CardTitle>
//                  </CardBody>
//               </Card>
//               {/* <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
//                 <CardImg top src='./image/1.jpeg' alt='Card image cap' />
//                 <CardBody>
//                   <CardTitle className='text-center fw-bold'>Painting</CardTitle>
//                  </CardBody>
//               </Card> */}
//               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
//                   <CardImg top src='/image/1.jpeg' alt='Card image cap' />
//                   <CardBody>
//                    <CardTitle className='text-center fw-bold'>Painting</CardTitle>
//                    </CardBody>
//               </Card>
//             </div>
//           </Col>

//           <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
//             <div className='home-carousel  h-100'>
//               <video width="100%" height="360" className='mt-5' controls src="./videos/v1.mp4" type="video/mp4" autoPlay loop>
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </Col>

//           <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
//             <div className='d-flex flex-column h-100 justify-content-between'>
//               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
//                 <CardImg top src='https://source.unsplash.com/random/900x700/?art' alt='Card image cap' className='rounded-3' />
//                 <CardBody>
//                   <CardTitle className='text-center fw-bold' tag="h5">Art</CardTitle>
//                  </CardBody>
//               </Card>
//               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
//                 <CardImg top src='https://source.unsplash.com/random/900x700/?art,painting,canvaspaint' alt='Card image cap' />
//                 <CardBody>
//                   <CardTitle className='text-center fw-bold' tag="h5">Canvas Paint</CardTitle>
//                  </CardBody>
//               </Card>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {};
// };

// export default connect(mapStateToProps, actions)(Homepage);

/*
 Homepage
 */

 import React from 'react';
 import { connect } from 'react-redux';
 import { Row, Col, Card, CardImg, CardBody, CardTitle } from 'reactstrap';
 import "../../styles/core/_homepage.scss";
 import actions from '../../actions';
 import banners from './banners.json';
 import CarouselSlider from '../../components/Common/CarouselSlider';
 import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';
 
 const dt = new Date();
 class Homepage extends React.PureComponent {
   render() {
     return (
       <div className='homepage'>
         <p className='greet'>
           {
             dt.getHours() < 12 ? "Good Morning" : 'Good Afternoon'
           }
         </p>
         <Row className='flex-row'>
           
           <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
             {/* <div className='d-flex flex-column h-100 justify-content-between'>
               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
                 <CardImg top src='/images/4.jpeg' alt='Card image cap' />
                 <CardBody>
                   <CardTitle className='text-center fw-bold'>Digital Art</CardTitle>
                 </CardBody>
               </Card>
               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
                 <CardImg top src='/images/1.jpeg' alt='Card image cap' />
                 <CardBody>
                   <CardTitle className='text-center fw-bold'>Painting</CardTitle>
                 </CardBody>
               </Card>
             </div> */}

            <div className='d-flex flex-column h-100 justify-content-between'>
               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
                 <CardImg top src='/images/6.jpg' alt='Card image cap' className='rounded-3' />
                 <CardBody>
                   <CardTitle className='text-center fw-bold' tag="h5">Art</CardTitle>
                 </CardBody>
               </Card>
               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
                 <CardImg top src='/images/5.jpg' alt='Card image cap' />
                 <CardBody>
                   <CardTitle className='text-center fw-bold' tag="h5">Art</CardTitle>
                 </CardBody>
               </Card>
             </div>
           </Col>
 
           <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
             <div className='home-carousel h-100'>
               <video width="100%" height="360" className='mt-5' controls src="/videos/v1.mp4" type="video/mp4" autoPlay loop>
                 Your browser does not support the video tag.
               </video>
             </div>
           </Col>
 
           <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
             <div className='d-flex flex-column h-100 justify-content-between'>
               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
                 <CardImg top src='/images/3.jpg' alt='Card image cap' className='rounded-3' />
                 <CardBody>
                   <CardTitle className='text-center fw-bold' tag="h5">Art</CardTitle>
                 </CardBody>
               </Card>
               <Card className='my-2 border border-3 border-primary shadow-lg rounded-lg'>
                 <CardImg top src='/images/5.jpg' alt='Card image cap' />
                 <CardBody>
                   <CardTitle className='text-center fw-bold' tag="h5">Art</CardTitle>
                 </CardBody>
               </Card>
             </div>
           </Col>
         </Row>
       </div>
     );
   }
 }
 
 const mapStateToProps = state => {
   return {};
 };
 
 export default connect(mapStateToProps, actions)(Homepage);
 