import _ from 'lodash';

export default (e, models) => {
  //if (e instanceof models.sequelize.ValidationError) {
    //  _.pick({a: 1, b: 2}, 'a') => {a: 1}
    console.log(e.errors);
    return e.errors.map(x => _.pick(x, ['path', 'message']));
 // }
  //return [{ path: 'name', message: 'something went wrong' }];
};


// const formatErrors = (e, models) => {
    // console.log(models.sequelize);
  // if (e instanceof models.sequelize.ValidationError) {
    //  _.pick({a: 1, b: 2}, 'a') => {a: 1}
    // return e.errors.map(x => _.pick(x, ['path', 'message']));
  // }
  // return [{ path: 'name', message: 'something went wrong' }];
// }