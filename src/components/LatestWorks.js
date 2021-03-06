import React from 'react'
import {
    Card,
    Avatar
} from 'antd';
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined
} from '@ant-design/icons';

import styles from '../styles/works.module.css'

const { Meta } = Card;

const LatestWorks = () => {
    return (
        <div>
            <p className={styles.title}>Latest Works</p>
            <div className={styles.cardWrapper}>
                <Card
                    style={{ width: 300, height: '100%' }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        </div>
    )
}

export default LatestWorks
