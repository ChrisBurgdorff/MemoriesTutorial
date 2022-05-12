const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
const FETCH_ALL = 'FETCH_ALL';
const LIKE = 'LIKE';








    dispatch({type: 'FETCH_ALL', payload: data});

    dispatch({type: 'CREATE', payload: data});

    dispatch({type: 'UPDATE', payload: data});

    dispatch({type: 'DELETE', payload: id});

    dispatch({type: 'LIKEPOST', payload: data});

};