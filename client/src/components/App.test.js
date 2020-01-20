// import React from 'react';
// import App from './App.js';
// import renderer from 'react-test-renderer';

// test('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <App>
//       <div className="container">
//         <BrowserRouter>
//           <div>
//             <Header />
//             <Switch>
//               <Route path="/blogs/new" component={BlogNew} />
//               <Route exact path="/blogs/:_id" component={BlogShow} />
//               <Route path="/blogs" component={Dashboard} />
//               <Route path="/" component={Landing} />
//             </Switch>
//           </div>
//         </BrowserRouter>
//       </div>
//     </App>,
//   );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseEnter();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   tree.props.onMouseLeave();
//   // re-rendering
//   tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import Header from './Header';
import App from './App';

describe('<App />', () => {
  it('renders one <Header /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.lengthOf(1);
  });

});