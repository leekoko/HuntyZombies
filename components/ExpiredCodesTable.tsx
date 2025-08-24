import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface ExpiredCode {
  code: string;
  reward: string;
  addedDate: string;
}

interface ExpiredCodesTableProps {
  codes: ExpiredCode[];
}

export default function ExpiredCodesTable({ codes }: ExpiredCodesTableProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-border">
            <TableHead className="text-foreground">Code</TableHead>
            <TableHead className="text-foreground">Reward</TableHead>
            <TableHead className="text-foreground">Status</TableHead>
            <TableHead className="text-foreground">Added Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {codes.map((code) => (
            <TableRow key={code.code} className="hover:bg-muted/20 border-border">
              <TableCell className="font-mono font-medium text-foreground">{code.code}</TableCell>
              <TableCell className="text-foreground">{code.reward}</TableCell>
              <TableCell>
                <Badge variant="destructive" className="bg-red-500/20 text-red-300 border-red-500/30">
                  Expired
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{code.addedDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}