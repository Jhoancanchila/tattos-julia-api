const db = require("../../../db");
const { formatDate } = require("../../services/formatDate");

const create = async( data ) => {

  const { payload, event } = data;

  const arrayEvent = payload.event.split("/");
  const idEvent = arrayEvent[arrayEvent.length - 1];
  const start_date = formatDate(payload.scheduled_event.start_time);
  const end_date = formatDate(payload.scheduled_event.end_time);
  const name_create = payload.name;
  const created_date = formatDate(payload.created_at);

  let response = [];

  try {  

    if(event === 'invitee.created'){
      
      [response]  = await db.query(`INSERT INTO CITATION
      (date_start, date_end, name_create, name_update,date_created,id_event,status,name_canceled,rol_canceled,reason_canceled)
      VALUES('${start_date}','${end_date}', '${name_create}', '${name_create}','${created_date}','${idEvent}','active','N/A','N/A','N/A')`);
      
    }else if(event === 'invitee.canceled'){
      [response]  = await db.query(`INSERT INTO CITATION
      (date_start, date_end, name_create, name_update,date_created,id_event,status,name_canceled,rol_canceled,reason_canceled)
      VALUES('${start_date}','${end_date}', '${name_create}', '${name_create}','${created_date}','${idEvent}', 'canceled','${payload.cancellation.canceled_by}','${payload.cancellation.canceler_type}','${payload.cancellation.reason}')`);
    }
    
    return response;

  } catch (error) {
    throw error;
  }

};

module.exports = {
  create,
}