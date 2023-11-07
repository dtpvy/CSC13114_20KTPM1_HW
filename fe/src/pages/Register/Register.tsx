import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import styles from '@/pages/Login/styles.module.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className={styles['login-container']}>
      <form className={styles['login-content']}>
        <div className={styles['login-title']}>Đăng ký</div>
        <div className={styles['login-label']}>Tên đăng nhập</div>
        <Input className={styles['login-input']} placeholder="Tên đăng nhập" />
        <div className={styles['login-label']}>Mật khẩu</div>
        <Input type="password" className={styles['login-input']} placeholder="Mật khẩu" />
        <div className={styles['login-label']}>Xác nhận mật khẩu</div>
        <Input type="password" className={styles['login-input']} placeholder="Xác nhận mật khẩu" />

        <Link to="/login" className="ml-auto">
          Đăng nhập
        </Link>

        <Button className="w-full font-bold mt-4">Đăng ký</Button>
      </form>
    </div>
  );
};

export default Register;
