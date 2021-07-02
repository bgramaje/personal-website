import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import styles from '../styles/timeline.module.css'

const StudiesTimeline = () => {
    return (
        <div>
            <p className={styles.title}>STUDIES</p>
            <Timeline mode="left" pending="..." reverse={true} className={styles.timeline} style={{ color: '#202020 !important' }} >
                <Timeline.Item color="#202020"></Timeline.Item>
                <Timeline.Item label="2016 - 2021" color="#202020">
                    Computer Engineering at <i>Universitat Politècnica de València (UPV)</i>
                    <br />
                    <span className={styles.subtitleTimeline}>
                        Mention in Information Technology.
                    </span>
                </Timeline.Item>
                <Timeline.Item label="2020 - 2021" color="#202020">
                    Information and Communication Technology at <i>LAB University of Applied Sciences</i>
                    <br />
                    <span className={styles.subtitleTimeline}>
                        Erasmus+ experience. Double degree obtained during this experience between Computer Engineering and ICT.
                    </span>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}

export default StudiesTimeline
