import classNames from 'classnames';
import styles from './Button.module.css'

interface BtnProps {
  href?: string;
  type?: string | undefined;
  text: string;
  styles: string;
  size: string
}

const Btn = (props: BtnProps) => {
  return (
      <button
        className={classNames(
          [styles.buttons],
          props.styles === 'dark'? styles['btn_dark'] :  styles['btn_light'],
          [styles[props.size]]
        )}
      >{props.text}
      </button>
   
  )
}

export default Btn;