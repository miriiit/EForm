export interface IGenericResponst<T> {
	status?: 'fail' | 'success';
	message?: string;
	data?: T;
	code?: string;
	error_id?: string;
}