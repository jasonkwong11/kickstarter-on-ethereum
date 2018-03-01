webpackHotUpdate(6,{

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(464);

var _Layout = __webpack_require__(1106);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1129);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(948);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jasonkwong/developer/kickstarter-on-ethereum/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description: 'You must contribute at least this much wei to become an approver'
      }, {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
      }, {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Number of people who have already donated to this campaign'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        meta: 'Campaign balance (ether)',
        description: 'The balance is how much money this campaign can spend'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, 'Campaign Show'), this.renderCards());
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiY2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7OztJLEFBRVg7Ozs7Ozs7Ozs7O2tDQWNVO21CQU9SLEtBUFEsQUFPSDtVQVBHLEFBRVYsaUJBRlUsQUFFVjtVQUZVLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsNkJBSlUsQUFJVjtVQUpVLEFBS1YsdUJBTFUsQUFLVjtVQUxVLEFBTVYsd0JBTlUsQUFNVixBQUdGOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFIRixBQUdlLEFBQ2I7ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFPWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBVlUsQUFPWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBZlUsQUFZWixBQUdlO0FBSGYsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047cUJBcEJVLEFBaUJaLEFBR2U7QUFIZixBQUNFO2dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ3QixBQUNVLEFBQTRCLEFBQ3BDO2NBRkYsQUFFUSxBQUNOO3FCQXpCSixBQUFjLEFBc0JaLEFBR2UsQUFJakI7QUFQRSxBQUNFOzsyQ0FNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRztBQURIO0FBQUEsT0FBQSxrQkFDRyxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FESCxBQUNHLEFBQ0MsdUJBSE4sQUFDRSxBQUVJLEFBQUssQUFHWjs7Ozs7MkcsQUE3RDZCOzs7OzttQkFDdEI7QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBLEFBQXFCOzt1QkFDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEIsQTs7bUJBQTlDO0E7O3VDQUdpQixRQURoQixBQUNnQixBQUFRLEFBQzdCOzJCQUFTLFFBRkosQUFFSSxBQUFRLEFBQ2pCO2lDQUFlLFFBSFYsQUFHVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQUpYLEFBSVcsQUFBUSxBQUN4QjsyQkFBUyxRQUFBLEFBQVEsQSxBQUxaO0FBQUEsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5xQixBLEFBaUUzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qYXNvbmt3b25nL2RldmVsb3Blci9raWNrc3RhcnRlci1vbi1ldGhlcmV1bSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/jasonkwong/developer/kickstarter-on-ethereum/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jasonkwong/developer/kickstarter-on-ethereum/pages/campaigns/show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi43MjAxOTA0NWJkYWI0MWIzODIyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/MjI1MmY2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aGVyZXVtL3dlYjMnO1xuXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzIChwcm9wcykge1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocHJvcHMucXVlcnkuYWRkcmVzcyk7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF1cbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyQ2FyZHMoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYmFsYW5jZSxcbiAgICAgIG1hbmFnZXIsXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgcmVxdWVzdHNDb3VudCxcbiAgICAgIGFwcHJvdmVyc0NvdW50XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgICBtZXRhOiAnQWRkcmVzcyBvZiBNYW5hZ2VyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXknLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJ31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgICAgbWV0YTogJ01pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3UgbXVzdCBjb250cmlidXRlIGF0IGxlYXN0IHRoaXMgbXVjaCB3ZWkgdG8gYmVjb21lIGFuIGFwcHJvdmVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgICAgbWV0YTogJ051bWJlciBvZiBSZXF1ZXN0cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSByZXF1ZXN0IHRyaWVzIHRvIHdpdGhkcmF3IG1vbmV5IGZyb20gdGhlIGNvbnRyYWN0LiBSZXF1ZXN0cyBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVycycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxuICAgICAgICBtZXRhOiAnTnVtYmVyIG9mIEFwcHJvdmVycycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnbidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpLFxuICAgICAgICBtZXRhOiAnQ2FtcGFpZ24gYmFsYW5jZSAoZXRoZXIpJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGUgYmFsYW5jZSBpcyBob3cgbXVjaCBtb25leSB0aGlzIGNhbXBhaWduIGNhbiBzcGVuZCdcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgICA8aDM+Q2FtcGFpZ24gU2hvdzwvaDM+XG4gICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFBQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQUtBO0FBRUE7QUFJQTtBQU5BO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBSUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQXhEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=