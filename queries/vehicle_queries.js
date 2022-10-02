const queries = {
    CREATE:``,
    UPDATE:`update vehicle_record.model_specification set model = {}`,
    DELETE:`delete from vehicle_record.model_specification where id=${id}`,
    GETBYID:`select model, year, cost, description from vehicle_record.model_specification where id=${id}`,
    GETALL:`select model, year, cost, description from vehicle_record.model_specification`
}