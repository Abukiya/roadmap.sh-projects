import { Route, Routes } from 'react-router';
import { Layout } from '../components/layout';
import { NotFoundPage } from '../components/not-found-page';
import { AddLaneForm } from '../features/lanes/components/add-lane-form';
import { LanesPage } from '../features/lanes/components/lanes-page';

export function AppRouter() {
  return (
    <Routes>
      <Route
        element={
          <Layout headerActions={<AddLaneForm variant="compact" />} />
        }
      >
        <Route index element={<LanesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
