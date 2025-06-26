const getUserModel = require('./models/user.model');
const getRoleModel = require('./models/role.model');
const getPermissionModel = require('./models/permission.model');
const getEventModel = require('./models/event.model');
const getEventTransactionModel = require('./models/event_transaction.model');
const getEventTeamModel = require('./models/event_team.model');
const getEventParticipantModel = require('./models/event_participant.model');
const getEventCouponModel = require('./models/event_coupon.model');
const getEventAnswerModel = require('./models/event_answer.model');
const getEventOrganizationModel = require('./models/event_organization.model');
const getEventClueModel = require('./models/event_clue.model');

module.exports = {
    getUserModel,
    getRoleModel,
    getPermissionModel,
    getEventModel,
    getEventTransactionModel,
    getEventTeamModel,
    getEventParticipantModel,
    getEventCouponModel,
    getEventAnswerModel,
    getEventOrganizationModel,
    getEventClueModel,
    // Add other models/utilities in future here
};