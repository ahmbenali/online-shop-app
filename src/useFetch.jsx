import { useState } from 'react';

export default function useFetch(baseUrl) {
	const [loading, setLoading] = useState(true);

	/*============================== GET function ===============================*/
	const get = url =>
		new Promise((resolve, reject) => {
			fetch(baseUrl + url)
				.then(res => res.json())
				.then(data => {
					if (!data) {
						setLoading(false);
						return reject(data);
					}
					setLoading(false);
					resolve(data);
				})
				.catch(err => {
					setLoading(false);
					reject(err);
				});
		});

	/*============================== POST function ===============================*/

	const post = (url, body) =>
		new Promise((resolve, reject) => {
			fetch(baseUrl + url, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			})
				.then(res => res.json())
				.then(data => {
					if (!data) {
						setLoading(false);
						return reject(data);
					}
					setLoading(false);
					resolve(data);
				})
				.catch(err => {
					setLoading(false);
					reject(err);
				});
		});

	return { get, post, loading };
}
