def build_upsert(table_id, fields, record_id=None):
    return {
        'action': 'qb_upsert', 
        'recordId': record_id, 
        'payload': {
            'tableId': table_id, 
            'fields': fields
        }
    }