import t from './rating.html';

export default () => {
	return {
        template: t,
		controller: 'StoreRatingController',
		scope: {
			rating: '='
		},
	}
};