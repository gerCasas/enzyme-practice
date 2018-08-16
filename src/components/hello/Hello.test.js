import React from 'react';
import { shallow } from 'enzyme';
import Hello from './Hello';
import ApiService from '../../utils/ApiService';


describe("Hello Component", function () {

  it('renders initial title', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find('div.hello-title').text()).toEqual('Request hello world from ApiService');
  });


  it('renders a request button', () => {
    const wrapper = shallow(<Hello />);
    expect(wrapper.find('button.hello-button').length).toEqual(1);
  });

  describe("Api Calls", function () {

    beforeEach(function() {

      global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
          resolve({
              ok: true,
              json: function() {
                return {id: 4, name: "german_casas", createdAt: "2018-08-15T20:24:17.140Z", updatedAt: "2018-08-15T20:24:17.140Z"}
              }
            })
        });
        return p;
      });

    });

    it("calls ApiService.getUserById", async function() {
      const response = await ApiService.getUserById('1');
      expect(response.name).toBe('german_casas');
    });

    it('simulate button click', done => {
      const wrapper = shallow(<Hello />);

      wrapper.find('button.hello-button').simulate('click');

      setTimeout(() => {
        wrapper.update();
        expect(wrapper.state('title')).toEqual('Request result: german_casas')
        done();
      });
    });
  });
});
