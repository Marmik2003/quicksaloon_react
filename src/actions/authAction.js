export const UPDATE_AUTH = 'UPDATE_AUTH';

export const updateAuth = ( auth ) => ( {
    type: UPDATE_AUTH,
    auth,
} );
