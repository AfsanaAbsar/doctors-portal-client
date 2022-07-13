import React from 'react';
import { Outlet, Link } from 'react-router-dom'
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (

        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='font-bold text-lg text-secondary'>Welcome To Dashboard</h1>
                <Outlet></Outlet>

                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/myreview'>My Review</Link></li>
                    {admin && <li><Link to="/dashboard/users">All Users</Link></li>}
                </ul>

            </div>
        </div>
        // <div class="drawer">
        //     <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        //     <div class="drawer-content">
        //         {/* <!-- Page content here --> */}
        //         <Outlet></Outlet>
        //         <h1>fdhjdfjssss</h1>
        //         <label for="my-drawer" class="btn btn-primary drawer-button">open</label>
        //     </div>
        //     <div class="drawer-side">
        //         <label for="my-drawer" class="drawer-overlay"></label>
        //         <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        //             {/* <!-- Sidebar content here --> */}
        //             <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
        //             <li><Link to='/dashboard/myreview'>Sidebar Item 2</Link></li>

        //         </ul>
        //     </div>
        // </div>
    );
};

export default Dashboard;