import { Input } from '@/components/Input';
import styles from './styles.module.css';
import { Button } from '@/components/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={styles['login-container']}>
      <div className={styles['login-content']}>
        <div className={styles['login-title']}>Đăng nhập</div>
        <div className={styles['login-label']}>Tên đăng nhập</div>
        <Input className={styles['login-input']} placeholder="Tên đăng nhập" />
        <div className={styles['login-label']}>Mật khẩu</div>
        <Input type="password" className={styles['login-input']} placeholder="Mật khẩu" />
        <div className={styles['login-remember']}>
          <Input type="checkbox" />
          <div>Nhớ mật khẩu</div>
        </div>
        <div className={styles['login-forget-password']}>
          <Link to="/">Quên mật khẩu</Link>
          <Link to="/register">Đăng ký tài khoản</Link>
        </div>
        <Button className="w-full font-bold mt-4">Đăng nhập</Button>
      </div>
    </div>
  );
};

export default Login;
