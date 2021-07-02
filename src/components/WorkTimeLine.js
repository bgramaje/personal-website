import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import styles from '../styles/timeline.module.css'

const WorkTimeline = () => {
    return (
        <div>
            <p className={styles.title}>WORK</p>
            <Timeline mode="left" pending="..." reverse={true} className={styles.timeline} style={{ color: '#202020' }} >
                <Timeline.Item color="#202020"></Timeline.Item>
                <Timeline.Item label="4 Months - Intership" color="#202020">
                    Front-End Software Engineer at <i>Good Morning Panda | Panda Creatiu</i>
                    <br />
                    <span className={styles.subtitleTimeline}>
                        Adobe XD for UX | UI design.
                        <br />
                        Wordpress as web Back-end.
                        <br />
                        HTML, CSS and JS as Front-end.
                    </span>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}

export default WorkTimeline
