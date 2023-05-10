import { DescriptionContainer, T, TableDescriptionCell } from '@/components/stitches';

const TimeDescription = () => {
  return (
    <DescriptionContainer flex="row">
      {[...Array(24)].map((_, i) => {
        const period: string = i <= 12 ? 'AM' : 'PM';
        const hour: number = i <= 12 ? i : (i - 12);

        if (i % 2 === 0) {
          return (
            <TableDescriptionCell key={`${hour}${period}`} align="center">
              <T size={4} color="cyan7">{hour}{period}</T>
            </TableDescriptionCell>
          );
        }

        return (
          <TableDescriptionCell key={`empty${i}`} align="center" />
        );
      })}
    </DescriptionContainer>
  );
};

export default TimeDescription;
