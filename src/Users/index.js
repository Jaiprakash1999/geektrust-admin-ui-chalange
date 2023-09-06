import useGetUserData from "./hook/useGetUserData";
import styles from "./styles.module.css";

const Users = () => {
    const { data } = useGetUserData();
    return (
        <div className={styles.container}>
            <header className={styles.header_container}>
                <input
                    type="search"
                    className={styles.search}
                    placeholder="Search by name, email or role"
                />
            </header>
            <div className={styles.header}>
                <strong className={styles.title}>
                    <input type="checkbox" />
                </strong>
                <strong className={styles.title}>Name</strong>
                <strong className={styles.title}>Email</strong>
                <strong className={styles.title}>Role</strong>
                <strong className={styles.title}> Actions</strong>
            </div>
            {data.map((user) => {
                return (
                    <div id={user.id} className={styles.user}>
                        <span className={styles.title}>
                            <input type="checkbox" />
                        </span>
                        <span className={styles.title}> {user.name}</span>
                        <span className={styles.title}>{user.email}</span>
                        <span className={styles.title}>{user.role}</span>
                        <span>
                            <svg
                                class="feather feather-edit"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill="red"
                                    d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.803372 6 11.082924 6.9194511 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 8.2636719 15 A 1.50015 1.50015 0 0 0 8.6523438 15.007812 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 39.347656 15.007812 A 1.50015 1.50015 0 0 0 39.728516 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.916254 6.9202798 35.196001 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 14.640625 9 L 33.359375 9 C 34.196749 9 34.974746 9.4162203 35.439453 10.113281 L 36.697266 12 L 11.302734 12 L 12.560547 10.113281 A 1.50015 1.50015 0 0 0 12.5625 10.111328 C 13.025982 9.4151428 13.801878 9 14.640625 9 z M 11.669922 15 L 36.330078 15 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 11.669922 15 z"
                                ></path>
                            </svg>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
export default Users;
