const markerRoutes = require('./marker_routes');

module.exports = function(app,db) {
    markerRoutes(app,db);
};