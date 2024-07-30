import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    SettingOutlined,
    BarsOutlined
} from '@ant-design/icons';

const MenuList = ({ darkTheme }) => {
    const menuItems = [
        {
            key: "home",
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>
        },
        {
            key: "activity",
            icon: <AppstoreOutlined />,
            label: <Link to="/activity">Activity</Link>
        },
        {
            key: "tasks",
            icon: <BarsOutlined />,
            label: "Tasks",
            children: [
                {
                    key: "task-1",
                    label: <Link to="/task1">Task 1</Link>
                },
                {
                    key: "task-2",
                    label: <Link to="/task2">Task 2</Link>
                },
                {
                    key: "subtasks",
                    label: "Subtasks",
                    children: [
                        {
                            key: "subtask-1",
                            label: <Link to="/subtask1">Subtask 1</Link>
                        },
                        {
                            key: "subtask-2",
                            label: <Link to="/subtask2">Subtask 2</Link>
                        }
                    ]
                }
            ]
        },
        {
            key: "progress",
            icon: <AreaChartOutlined />,
            label: <Link to="/progress">Progress</Link>
        },
        {
            key: "payment",
            icon: <PayCircleOutlined />,
            label: <Link to="/payment">Payment</Link>
        },
        {
            key: "setting",
            icon: <SettingOutlined />,
            label: <Link to="/setting">Setting</Link>
        }
    ];

    return (
        <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className={`menu-bar ${darkTheme ? '' : 'light-mode'}`} items={menuItems} />
    );
};

export default MenuList;
